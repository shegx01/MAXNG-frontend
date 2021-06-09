import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";
import styles from "./ApplicationLayout.module.css";
import AppLogo from "../components/application/AppLogo";
import Image from "next/image";
import DashboardLink from "../components/application/DashboardLink"

import { Bell, MessageSquare } from "react-feather";

const ApplicationLayout = (props) => {

  const links = [
    { path: "/dashboard", name: "dashboard" },
    { path: "/starships", name: "starships" },
    { path: "/people", name: "people" },
    { path: "/vehicles", name: "vehicles" },
    { path: "/species", name: "species" },
  ];
  const [currentRoutePath, setRouthPath] = useState("");
  const router = useRouter();

  const computeRouthPath = (pathName) => {
    const newPath = pathName.replace(/\//gi, "");
    setRouthPath(newPath);
  };
  useEffect(() => {
    computeRouthPath(router.pathname);
  });

  const { children } = props;
  return (
    <div className={styles.container}>
      <div className={styles.container__side_bar}>
        <div className={styles.logo_box}>
          <AppLogo />
        </div>
        <div className={styles.nav_container}>
          <ul>
            {links.map((link, idx) => (
              <li
                key={idx}
                className={
                  router.pathname === link.path
                    ? [styles.nav_active_color, styles.nav_links].join(" ")
                    : styles.nav_links
                }
              >
                <DashboardLink
                  link={link}
                  iconColor={
                    router.pathname === link.path
                      ? "var(--color-yellow-vivid)"
                      : "var( --color-icon-grey)"
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.app_content}>
        <div className={styles.app_content__header_one}>
          <div className={styles.header_controls}>
            <span className={styles.header_controls__current_route}>
              {currentRoutePath}
            </span>
            <div className={styles.header_controls__right}>
              <span className={styles.header_controls__right_button}>
                <MessageSquare size="18" color="var(--color-icon-grey)" />
              </span>

              <span className={styles.header_controls__right_button}>
                <Bell size="18" color="var(--color-icon-grey)" />
              </span>
              <span className={styles.header_controls__right_button}>
                <Image src="/app/user2.png" width="48" height="48" />
              </span>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ApplicationLayout;
