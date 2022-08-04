import { MailIcon } from "@heroicons/react/outline";

const Header = ({ customers, currentCustomer, setCurrentCustomer }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setCurrentCustomer(
      customers.find((customer) => customer.id === Number(e.target.value))
    );
  };
  return (
    <>
      <div className="bg-black text-cyan-500 mr-4 flex flex-col sm:flex-row justify-between w-full">
        {/* LEFT PART */}
        <div className="flex items-center gap-8 p-2">
          <div>
            <p className="text-xs">ADMIN Customers</p>
            <div className="flex items-center gap-8">
              <p className="text-sm font-bold text-white md:text-3xl">
                WE&#8202;THE&#8202;NEW
              </p>
              <div className="flex items-center justify-around gap-3 bg-cyan-500 text-white py-0 px-2">
                <MailIcon className="h-4" />
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
        <div className="md:border-l-2 md:border-white p-2 flex items-center ">
          {currentCustomer && (
            <img
              className="sm:block h-8 rounded-full"
              src={currentCustomer.avatar}
              alt="Profil du manager"
            />
          )}

          <select
            name="select"
            className="text-sm bg-black text-white"
            onChange={(e) => handleChange(e)}
          >
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
      <div className="bg-cyan-500 text-white px-2 text-sm w-full">
        <p>Gestion des messages clients</p>
      </div>
    </>
  );
};

export default Header;
