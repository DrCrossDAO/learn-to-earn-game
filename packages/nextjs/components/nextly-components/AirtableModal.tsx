const AirtableModal = ({ isOpen, toggleModal }: { isOpen: boolean; toggleModal: () => void }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Modal container */}
          <div className="relative bg-white rounded-lg p-8 max-w-3xl w-full mx-4">
            {/* Close button */}
            <button
              className="absolute top-0 right-0 m-4 text-black text-lg font-bold"
              onClick={toggleModal}
            >
              &times;
            </button>

            {/* Airtable iframe */}
            <iframe
              className="airtable-embed w-full h-96" // Adjusted height to fit content
              src="https://airtable.com/embed/appqeFCNytLnTpNFz/shrZY0KsJH4FXHG9n"
              frameBorder="0"
              style={{ background: "transparent", border: "1px solid #ccc" }}
              title="Airtable Embed"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default AirtableModal;
