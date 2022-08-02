import { InboxInIcon } from "@heroicons/react/outline";

const Header = ({ customers, currentCustomer, setCurrentCustomer }) => {
  return (
    <>
      <div className="bg-black text-cyan-500 m4-4 flex justify-between">
        {/* LEFT PART */}
        <div className="flex items-center gap-8 p-2">
          <div>
            <p className="text-xs">ADMIN Customers</p>
            <div className="flex items-center gap-8">
              <p className="text-3xl font-bold text-white">
                WE&#8202;THE&#8202;NEW
              </p>
              <div className="flex items-center justify-around gap-3 bg-cyan-500 text-white py-0 px-2">
                <InboxInIcon className="h-4" />
                {currentCustomer ? (
                  <p>{currentCustomer.unread_messages}</p>
                ) : (
                  <p>loading</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PART */}
        <div className="border-l-2 border-white p-2 flex items-center ">
          {currentCustomer && (
            <img
              className="h-8 rounded-full"
              src={currentCustomer.avatar}
              alt="Profil du manager"
            />
          )}
          <select name="select" className="bg-black text-white">
            {customers.map((customer) => {
              return (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="bg-cyan-500 text-white px-2 text-sm">
        <p>Gestion des messages clients</p>
      </div>
    </>
  );
};

export default Header;
