import GlobalStyle from '../styles';
import useLocalStorageState from "use-local-storage-state"; 


export default function MyApp({ Component, pageProps }) {

  const [serviceCards, setServiceCards] = useLocalStorageState("serviceCards", { defaultValue: [] });

  function handleAddServiceCards(newServiceCard) {
    setServiceCards((prevServiceCards) => [...prevServiceCards, newServiceCard]);
  };

  function handleEditServiceCard(updatedServiceCard) {
    const updatedCards = serviceCards.map(card => {
      if (card.id === updatedServiceCard.id) {
        return updatedServiceCard;
      }
      return card;
    });
    setServiceCards(updatedCards);
  };

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} serviceCards={serviceCards} setServiceCards={setServiceCards} handleEditServiceCard={handleEditServiceCard} handleAddServiceCards={handleAddServiceCards} />
    </>
  );
}
