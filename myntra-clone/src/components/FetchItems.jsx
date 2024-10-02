import { useDispatch, useSelector } from "react-redux";
import {itemSliceAction} from "../Store/itemSlice"
import { useEffect } from "react";
import { fetchStatusActions } from "../Store/fetchStatusSlice";

const FetchItems = () => {


  const fetchStatus = useSelector((store) => store.fetchstatus);
 const  dispatch = useDispatch();


  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

   if(fetchStatus.fetchDone) return;

   dispatch(fetchStatusActions.markFetchingStarted())
  
    fetch("http://localhost:8080/items", { signal })
   
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFineshed());
        dispatch(itemSliceAction.addInitialItems(items[0]));
       

      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <></>
  )
}

export default FetchItems;

