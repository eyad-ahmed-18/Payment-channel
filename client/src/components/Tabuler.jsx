import { useEffect, useState } from "react";
import Identicon from "identicon.js";
import { getAllTransactions } from "../shared/Transaction";
import { useGlobalState } from "../store";
import { setGlobalState } from "../store";

const Tabuler = () => {
  const [transactionsStore] = useGlobalState("transactions");
  const [transactionCount] = useGlobalState("transactionCount");
  const [transactions, setTransaction] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);

  const makeImage = (address) => {
    const data = new Identicon(address, 400).toString();
    return `data:image/png;base64,${data}`;
  };

  const loadMoreTransactions = () => {
    setTransaction((prevState) => [
      ...prevState,
      ...transactionsStore.slice(start, end),
    ]);
    setStart(end);
    setEnd(end * 2);
  };

  const shortenAddress = (address) =>
    `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;

  useEffect(() => {
    getAllTransactions().then((data) => {
      setTransaction([...data.slice(start, end)]);
      setStart(end);
      setEnd(end * 2);
    });
  }, []);

  return (
    <>
      <section className="antialiased rounded-xl text-gray-600 p-5 bg-blue">
        <div className="flex flex-col justify-center h-full bg-blue">
          <div
            className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl rounded-lg"
            style={{ background: "lightblue" }}
          >
            <header className="px-5 py-4">
              <h2 className="font-semibold text-gray-800 text-center">
                Total Transactions {transactionCount}
              </h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-s font-bold uppercase text-black">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left"></div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Sender</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Receiver</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Amount</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Timestamp</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Remark</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {transactions.map((tx, index) => (
                      <tr key={index + 1}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src={makeImage(tx.sender)}
                                width="40"
                                height="40"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            <a
                              href={`https://ropsten.etherscan.io/address/${tx.sender}`}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:text-blue-500"
                            >
                              {shortenAddress(tx.sender)}
                            </a>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            <a
                              href={`https://ropsten.etherscan.io/address/${tx.receiver}`}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:text-blue-500"
                            >
                              {shortenAddress(tx.receiver)}
                            </a>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex flex-row justify-center items-center text-left font-medium">
                            <span className="text-sm">{tx.amount}</span>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-center">
                            {tx.timestamp}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-center">{tx.remark}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center mt-5 mb-10">
        <button
          onClick={loadMoreTransactions}
          className="text-cyan-500 bg-black py-2 px-5 rounded-xl drop-shadow-xl border border-transparent hover:bg-transparent hover:text-black hover:border hover:border-black focus:outline-none focus:ring"
        >
          Load more
        </button>
        <button
          onClick={() => setGlobalState("modal", "scale-100")}
          className="m-2 text-black  py-2 px-5 rounded-xl drop-shadow-xl border border-black hover:bg-black hover:text-cyan-500 hover:border hover:border-black focus:outline-none focus:ring"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default Tabuler;
