const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-700">
      <div className="text-center">
        <img
          className="h-[300px] w-[600px] p-2 bg-blue-200 dark:bg-gray-700 rounded mx-auto"
          src="https://images.unsplash.com/photo-1731902062588-4dce45ccc0cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
        <div className="tracking-tight text-2xl font-bold mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          error quia quaerat porro ratione totam similique eum voluptate
          repellendus hic, voluptatum illum consectetur, inventore recusandae
          quo cumque quasi officiis reprehenderit!
        </div>
      </div>
    </div>
  );
};

export default Home;
