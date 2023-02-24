import React, { useEffect } from "react";
import "./ProductSummary.scss";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BsCart4, } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import InfoBox from "../../infoBox/InfoBox";
import { useDispatch, useSelector } from "react-redux";
import {
  CALC_CATEGORY,
  CALC_Expense_VALUE,
  selectCategory,
  selectTotalExpenseValue,
} from "../../../redux/features/product/productSlice";

// Icons
const earningIcon = <HiOutlineCurrencyRupee size={40} color="#fff" />;
const productIcon = <BsCart4 size={40} color="#fff" />;
const categoryIcon = <BiCategory size={40} color="#fff" />;

// Format Amount
export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductSummary = ({ products }) => {
  const dispatch = useDispatch();
  const totalExpenseValue = useSelector(selectTotalExpenseValue);
  const category = useSelector(selectCategory);

  useEffect(() => {
    dispatch(CALC_Expense_VALUE(products));
    dispatch(CALC_CATEGORY(products));
  }, [dispatch, products]);

  return (
    <div className="product-summary">
      <h3 className="--mt">Expense Status</h3>
      <div className="info-summary">
      <InfoBox
          icon={earningIcon}
          title={"Total Expense"}
          count={`₹${formatNumbers(totalExpenseValue.toFixed(2))}  `}
          bgColor="card2"
        />
        <InfoBox
          icon={productIcon}
          title={"Total Products"}
          count={products.length}
          bgColor="card1"
        />
        <InfoBox
          icon={categoryIcon}
          title={"All Categories"}
          count={category.length}
          bgColor="card3"
        />
       
        
      </div>
    </div>
  );
};

export default ProductSummary;
