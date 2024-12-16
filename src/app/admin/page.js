"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"; // Import the useSession hook from next-auth
import { useRouter } from "next/navigation"; // Import useRouter to handle redirects
import { supabase } from "../lib/supabase";
import AddEditMenuModal from "./AddEditMenuModal"; // Import modal component

const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [menuItems, setMenuItems] = useState([]);
  const [isOpenAddEditModal, setIsOpenAddEditModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const reloadItems = async () => {
    if (status === "authenticated") {
      // Fetch the menu items from Supabase
      const { data, error } = await supabase
        .from("menu")
        .select("*");

      if (error) {
        console.error("Error fetching menu:", error);
      } else {
        setMenuItems(data); // Store menu items in state
      }
   }
 }
 
  useEffect(() => {
    const fetchMenuItems = async () => {
      if (status === "authenticated") {
        const userEmail = session.user.email;
        const { data: userData, error: userError } = await supabase
          .from("user")
          .select("*")
          .eq("username", userEmail)
          .single(); 

          if (userError || !userData) {
            console.log("User not found or error occurred, redirecting...");
            router.push("/"); // Redirect to home page
            return;
          }

          // Fetch the menu items from Supabase
          const { data, error } = await supabase
          .from("menu")
          .select("*");
          
          if (error) {
            console.error("Error fetching menu:", error);
          } else {
          setIsAdmin(true);
          setMenuItems(data); // Store menu items in state
        }
      } else {
        // If user is not authenticated, redirect to home page
        router.push("/"); // Redirect to home page
      }
    };

    if (status !== "loading") {
      fetchMenuItems();
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const openAddEditMenuModal = (menuItem = null) => {
    setSelectedMenuItem(menuItem);
    setIsOpenAddEditModal(true);
  };

  const closeAddEditMenuModal = () => {
    setSelectedMenuItem(null);
    setIsOpenAddEditModal(false);
  };

  const deleteMenuItem = async (id) => {
    const { error } = await supabase.from('menu').delete().eq('id', id);
    if (error) {
      console.error('Error deleting menu:', error);
    } else {
      setMenuItems(menuItems.filter(item => item.id !== id));
    }
  };

  return (
     <>
     {isAdmin && 
    <div className="mt-50">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Admin Menu Management</h1>
        <p className="text-xl text-yellow-200 font-bold mb-4">Hello {session?.user?.name}</p>

        <div className="mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => openAddEditMenuModal()}
          >
            Add Menu Item
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-gray-700 p-4">No Items</td>
                </tr>
              ) : (
                menuItems.map(item => (
                  <tr key={item.id} className="border-t border-gray-200">
                    <td className="px-6 py-4 text-sm text-white">{item.title}</td>
                    <td className="px-6 py-4 text-sm text-white">{item.description}</td>
                    <td className="px-6 py-4 text-sm text-white">{item.price}</td>
                    <td className="px-6 py-4 text-sm text-white">
                      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                    </td>
                    <td className="px-6 py-4 text-sm text-white">
                      <button
                        className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600"
                        onClick={() => openAddEditMenuModal(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 ml-2"
                        onClick={() => deleteMenuItem(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Menu Item Modal */}
      {isOpenAddEditModal && (
        <AddEditMenuModal 
          menuItem={selectedMenuItem}
          closeModal={closeAddEditMenuModal} 
          reloadItems={reloadItems}
          setMenuItems={setMenuItems}
        />
      )}
    </div>
    }
    </>
  );
};

export default AdminPage;
