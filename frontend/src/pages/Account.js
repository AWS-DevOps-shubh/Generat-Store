import React from "react";

const Account = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">My Account</h2>
      <p className="mt-2">Name: John Doe</p>
      <p>Email: john@example.com</p>
      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
};

export default Account;

