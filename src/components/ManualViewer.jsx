const ManualViewer = () => {
  const manualUrl = "https://drive.google.com/file/d/1BzaYpoHOQ2ScHntzAeQsamL5KjSMq9rB/view?usp=drivesdk";

  return (
    <div className="w-full h-screen bg-gray-100">
      <iframe
        src={manualUrl}
        width="100%"
        height="100%"
        allow="autoplay"
        title="Manual PDF"
      ></iframe>
    </div>
  );
};

export default ManualViewer;
