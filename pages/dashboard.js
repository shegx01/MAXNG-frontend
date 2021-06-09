import ApplicationLayout from "../layouts/ApplicationLayout";
import styles from "../styles/Dashboard.module.css";
import CustomSelect from "../components/dashboard/CustomSelect";
import { useEffect, useState } from "react";
import CardLink from "../components/dashboard/CardLink";
import api from "../hooks/userFetch";
import { isEmpty } from "ramda";
import CustomTable from "../components/dashboard/CustomTable";
import IndicatorIcon from "../components/dashboard/IndicatorIcon";
import { User, Video } from "react-feather";
const Dashboard = () => {
  const filmsTableTitle = "Films";
  const filmsTablecolumns = [
    {
      title: "Film Title",
      dataIndex: "title",
      key: "title",
      className: "align-left",
    },
    {
      title: "Director",
      dataIndex: "director",
      key: "director",
    },
    {
      title: "Producer",
      dataIndex: "producer",
      key: "producer",
    },
    {
      title: "Release Date",
      dataIndex: "release_date",
      key: "release_date",
    },
    {
      title: "Episode ID",
      dataIndex: "episode_id",
      key: "episode_id",
    },
    {
      title: "Characters",
      dataIndex: "characters",
      key: "characters",
      render: (value) => (
        <span style={{ color: "var(--color-green-darkest)" }}>{value[0]}</span>
      ),
    },
  ];
  const { get, error, loading, response } = api();
  const [menuLinks, setMenuLinks] = useState({});
  const [filmsData, setFilmsData] = useState([]);

  // some code repetition
  // could have refactored into components but time limit
  const transformedFilmData = filmsData.map((film) => {
    return {
      ...film,
      key: film.release_date,
      title: (
        <div style={{ display: "flex", alignItems: "" }}>
          <IndicatorIcon bgColor="var(--color-green-lightest)">
            <Video color="var(--color-green-light)" size="20" />
          </IndicatorIcon>
          <span
            style={{
              paddingLeft: "6px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {film.title}
          </span>
        </div>
      ),
      director: (
        <div style={{ display: "flex", alignItems: "" }}>
          <span
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "30px",
              padding: "2px 3px",
            }}
          >
            <User color="var(--color-grey-darkest)" size="16" />
          </span>
          <span
            style={{
              paddingLeft: "6px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {film.director}
          </span>
        </div>
      ),
      producer: (
        <div style={{ display: "flex", alignItems: "" }}>
          <span
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "30px",
              padding: "2px 3px",
            }}
          >
            <User color="var(--color-grey-darkest)" size="16" />
          </span>
          <span
            style={{
              paddingLeft: "6px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {film.producer}
          </span>
        </div>
      ),
    };
  });

  async function loadInitialMenu() {
    const data = await get("/");
    if (response.ok) {
      setMenuLinks(data);
    }
  }

  async function loadFilmsData() {
    const data = await get("/films");
    if (response.ok) {
      setFilmsData(data.results);
    }
  }

  const selectOption1 = [
    {
      value: "current year",
      text: "current year",
    },
    {
      value: "last year",
      text: "last year",
    },
    {
      value: "2019",
      text: "2019",
    },
    {
      value: "2018",
      text: "2018",
    },
  ];
  const selectOption2 = [
    {
      value: "current week",
      text: "current week",
    },
    {
      value: "last week",
      text: "last week",
    },
    {
      value: "week 20",
      text: "week 20",
    },
    {
      value: "week 17",
      text: "week 17",
    },
  ];
  const [currentYear, setSelectedYear] = useState(selectOption1[0].value);
  const [currentWeek, setSelectedWeek] = useState(selectOption2[0].value);

  useEffect(() => {
    loadInitialMenu();
    loadFilmsData();
  }, []);
  const handleSelectedYearChange = (evt) => {
    evt.persist();
    setSelectedYear(evt.target.value);
  };
  const handleSelectedWeekChange = (evt) => {
    evt.persist();
    setSelectedWeek(evt.target.value);
  };
  return (
    <ApplicationLayout>
      <div className={styles.container}>
        <div className={styles.dashboard_header}>
          <div className={styles.dashboard_header_search}>
            <div>
              <CustomSelect
                defaultValue={currentYear}
                selectionOptions={selectOption1}
                onClickFn={handleSelectedYearChange}
              />
            </div>
            <div>
              <CustomSelect
                defaultValue={currentWeek}
                selectionOptions={selectOption2}
                onClickFn={handleSelectedWeekChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.dashboard_content}>
          {loading && (
            <span className={styles.navigation__loading}>Loading...</span>
          )}

          {!isEmpty(menuLinks) && (
            <div className={styles.content_navigation_container}>
              {Object.keys(menuLinks).map((categories, idx) => (
                <CardLink key={idx} cardTitle={categories} />
              ))}
            </div>
          )}
          <div className={styles.table_container}>
            <CustomTable
              title={filmsTableTitle}
              columns={filmsTablecolumns}
              data={transformedFilmData}
            />
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
};

export default Dashboard;
