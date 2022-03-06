import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Table, Row, Col, Layout, Input, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { getAllDataPokemon } from "../../stores/actions/pokemon";

const { Header, Footer, Content } = Layout;

const Home = () => {
  const dispatch = useDispatch();

  const [dataSource, setDataSource] = useState([]);
  const [id, setId] = useState("");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Pokemon Name",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Pokemon Type",
      dataIndex: "type",
      align: "center",
    },
  ];

  const getAllPokemon = () => {
    setLoading(true);
    dispatch(getAllDataPokemon(id, search, limit)).then((res) => {
      setDataSource(res.action.payload.data.data);
      setLimit(res.action.payload.data.pagination.totalData);
      setLoading(false);
    });
  };

  useEffect(() => {
    document.title = "Pokedex | Home";
    getAllPokemon();
  }, [id, search, limit]);

  return (
    <>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Laravel</Menu.Item>
            <Menu.Item>Vue Js</Menu.Item>
            <Menu.Item>CodeIgniter</Menu.Item>
            <Menu.Item>React Js</Menu.Item>
            <Menu.Item>Lumen</Menu.Item>
            <Menu.Item>Odoo</Menu.Item>
            <Menu.Item>Javascript</Menu.Item>
          </Menu>
        </Header>
        <Content className="main__content">
          <Row className="main__content--searchBar">
            <Col span={24}>
              <Input
                size="large"
                placeholder="Search pokemon ..."
                prefix={<SearchOutlined />}
                className="searchBar"
              />
            </Col>
          </Row>
          <Row className="main__content--table">
            <Col span={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  loading={loading}
                  bordered
                ></Table>
              </div>
            </Col>
          </Row>
        </Content>
        <Footer className="footer">
          <p className="footer__text">
            All content & design ©, Pokemon Database 2008-2022. Pokemon images &
            names © 1995-2022 Nintendo/Game Freak.
          </p>
          <p className="footer__text">Privacy Policy</p>
        </Footer>
      </Layout>
    </>
  );
};

export default Home;
