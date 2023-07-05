import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen} from "@fortawesome/free-solid-svg-icons";
import styles from './Header.module.scss'
export function Header() {
  return <header><h1 className="header__title--visible" aria-description="Google Books Search"><FontAwesomeIcon icon={faBookOpen} /> <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span> <span>B</span><span>o</span><span>o</span><span>k</span><span>s</span> Search </h1></header>;
}

