import PropTypes from "prop-types";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

let styles = {
  nav: "bg-red-500 uppercase text-center",
  ul: "flex flex-row",
  h1: "bg-green-500 text-blue uppercase",
  h2: "bg-red-500 text-white uppercase",
};

// let loading = true;
const Navbar = () => {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <div>
      <Input
        id="number"
        classname="text-red-500"
        value="number"
        placeholder="number"
        npm
        run
        start
        type="number"
      />
      <Input />
      <Button
        type="button"
        id="submit"
        value="Envoyer"
        onClick={() => setShowLoading(true)}
      />
      {showLoading ? (
        <>
          <h1 className={styles.h1}>hello world</h1>
        </>
      ) : (
        <>
          <h2 className={styles.h2}>hello acs</h2>
        </>
      )}
    </div>
  );
};


export default Navbar;