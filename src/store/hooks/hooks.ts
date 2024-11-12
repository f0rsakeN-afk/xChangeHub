import { AppDispacth, RootState } from "../Store";
import { useSelector, useDispatch } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispacth>();
export const useAppSelector = useSelector.withTypes<RootState>();
