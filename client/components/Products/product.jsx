import React from "react";
import Button from "@mui/material/Button";
import styles from "../../styles/product.module.css";
import SimpleSlider from "../Products/ImageSlider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";

export const Product = ({ Title, Price, Images, _id }) => {
  const { asPath } = useRouter();
  return (
    <div className={styles.mainDiv}>
      <Link href={`${asPath}/product/${_id}`}>
        <div className={styles.productDiv}>
          <SimpleSlider data={Images} />
          <div className={styles.infoDiv}>
            <h3>₹ {Price}</h3>
            <p>{Title}</p>
          </div>
        </div>
      </Link>
      <div className={styles.hiddenDiv}>
        <div>
          <Button variant="contained">ADD TO BASKET</Button>
          <IconButton
            color="primary"
            size="large"
            aria-label="add to shopping cart"
          >
            <FavoriteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
