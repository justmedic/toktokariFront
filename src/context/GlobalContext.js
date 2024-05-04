import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const GContext = createContext();

export const useG = () => useContext(GContext);

const GlobalContext = ({ children }) => {
  const [cats, setCats] = useState([]);
  const [catUrl, setCatUrl] = useState("");
  const [catNames, setCatNames] = useState([]);
  const [counter, setCounter] = useState(0);

  const createCatNamesObject = useCallback(() => {
    setCatNames(
      cats.reduce((prev, curr) => {
        return { ...prev, [curr.id]: curr.name };
      }, {})
    );
  }, [cats]);

  useEffect(() => {
    if (cats.length > 0 && counter === 0) {
      createCatNamesObject();
      setCounter(1);
    }
  }, [cats, counter, createCatNamesObject]);

  const providerValues = {
    cats,
    setCats,
    catUrl,
    setCatUrl,
    createCatNamesObject,
    catNames,
  };

  return (
    <GContext.Provider value={providerValues}>{children}</GContext.Provider>
  );
};

export default GlobalContext;
