"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";

const AddEditMenuModal = ({ menuItem, closeModal, reloadItems }) => {
  const [title, setTitle] = useState(menuItem ? menuItem.title : "");
  const [description, setDescription] = useState(menuItem ? menuItem.description : "");
  const [price, setPrice] = useState(menuItem ? menuItem.price : "");
  const [image, setImage] = useState(menuItem ? menuItem.image : "");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (event) => {
    setLoading(true)
    const file = event.target.files[0];
    if (file) {
      // Upload image to Supabase storage
      const fileName = `${Date.now()}_${file.name}`;
      const { data, error } = await supabase.storage
        .from("menu-image")
        .upload(fileName, file);

      if (error) {
        console.error("Error uploading image:", error);
        setError(true)
        return;
      }

      // Get the public URL for the uploaded image
      const imageUploaded = supabase.storage
        .from("menu-image")
        .getPublicUrl(fileName);

      setImage(imageUploaded.data.publicUrl);
    }
    setLoading(false)
  };

  const handleSaveChanges = async () => {
    setLoading(true)
    if (!title || !price) {
      console.error("Title and price are required!");
      setError(true)
      return;
    }

    const menuData = {
      title,
      description,
      price: parseFloat(price),
      image: image || menuItem.image, // Use the new image URL or keep the old one
    };

    // Check if we are editing or adding a new menu item
    if (menuItem && menuItem.id) {
      const { error } = await supabase
        .from("menu")
        .update(menuData)
        .eq("id", menuItem.id);

      if (error) {
        console.error("Error updating menu item:", error);
        setError(true)
      } else {
        console.log("Menu item updated successfully");
        reloadItems(); 
        closeModal(); 
      }
    } else {
      const { error } = await supabase
        .from("menu")
        .insert([menuData]);

      if (error) {
        console.error("Error adding menu item:", error);
      } else {
        console.log("Menu item added successfully");
        reloadItems();
        closeModal(); 
      }
    }
    setLoading(false)
  };

  const handleDeleteMenuItem = async () => {
    setLoading(true)
    if (!menuItem || !menuItem.id) {
      console.error("Menu item ID is missing");
      return;
    }

    const { error } = await supabase
      .from("menu")
      .delete()
      .eq("id", menuItem.id);

    if (error) {
      console.error("Error deleting menu item:", error);
    } else {
      console.log("Menu item deleted successfully");
      reloadItems(); 
      closeModal(); 
    }
    setLoading(false)
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-black text-2xl font-semibold mb-4">{menuItem ? "Edit" : "Add"} Menu Item </h2>
        {error && <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span class="font-medium">ERROR!</span> {error}
        </div>}

        <form>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-black"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-black"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            step="0.01"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-black"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-black"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {image && <img src={image} alt="Menu Image" className="w-32 h-32 object-cover mb-4" />}
          <div className="flex justify-end">
            {menuItem && menuItem.id && (
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mr-2"
                onClick={handleDeleteMenuItem} disabled={error || loading}
              >
                Delete
              </button>
            )}
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={handleSaveChanges} disabled={error || loading}
            >
              {menuItem ? "Save Changes" : "Add Menu Item"}
            </button>
            <button
              type="button"
              className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditMenuModal;
