import React from "react";
import { styled } from "styled-components";
import AccountSideBar from "src/components/Account";
import { Col, Row } from "react-bootstrap";
import Checkbox from "src/components/Checkbox";
import Button from "../components/Button";
import Control from "src/components/Control";

const Account = () => {
  return (
    <Wrapper>
      <Row>
        <Col sm="4">
          <AccountSideBar />
        </Col>
        <Col sm="8">
          <Main>
            <Title>
              <h1>Thông tin tài khoản</h1>
              <span>Bạn có thể cập nhật thông tin của mình ở trang này</span>
            </Title>
            <Content>
              <Row>
                <Col sm="6">
                  <LoginInfor>
                    <div className="title">
                      <h2>Thông tin đăng nhập</h2>
                    </div>
                    <div className="content">
                      <p>
                        <span>Email:</span>
                        <span>
                          <b>nhut2446@gmail.com</b>
                        </span>
                      </p>
                      <p>
                        <span>Số điện thoại:</span>
                        <span>
                          <b>0912 151 717</b>
                        </span>
                      </p>
                      <Checkbox label="Thay đổi mật khẩu" id="change-pass" />
                      <div className="password">
                        <form action="">
                          <Control
                            id="password"
                            label="Mật khẩu mới"
                            type="password"
                          />
                          <Control
                            id="password-confim"
                            label="Nhập lại khẩu mới"
                            type="password"
                          />
                          <Button>Cập nhật</Button>
                        </form>
                      </div>
                    </div>
                  </LoginInfor>
                </Col>
                <Col sm="6">
                  <PersonalInfor>
                    <div className="title">
                      <h2>Thông tin cá nhân</h2>
                    </div>
                    <div className="content">
                      <form action="">
                        <Row>
                          <Col sm="6">
                            <Control id="surename" label="Họ" value="Huỳnh" />
                          </Col>
                          <Col sm="6">
                            <Control id="name" label="Tên" value="Nhựt" />
                          </Col>
                        </Row>
                        <Control
                          id="email"
                          label="Email"
                          value="Nhut160502@gmail.com"
                          type="email"
                        />
                        <Control
                          id="phone-number"
                          label="Số điện thoại"
                          value="0912151717"
                        />

                        <div className="fiel">
                          <label>Giới tính</label>
                          <div className="check">
                            <div className="item">
                              <input type="radio" name="sex" id="fe-male" />
                              <label htmlFor="fe-male">Nam</label>
                            </div>
                            <div className="item">
                              <input type="radio" name="sex" id="male" />
                              <label htmlFor="male">Nữ</label>
                            </div>
                          </div>
                        </div>
                        <div className="fiel">
                          <label htmlFor="sex">Sinh nhật</label>
                          <div className="note">
                            Thông tin ngày sinh sẽ không thay đổi được sau khi
                            nhập. Vui lòng nhập đúng thông tin.
                          </div>
                          <div className="control">
                            <select className="days" name="days" disabled>
                              <option value="">16</option>
                              <option value="1">01</option>
                              <option value="2">02</option>
                              <option value="3">03</option>
                              <option value="4">04</option>
                              <option value="5">05</option>
                              <option value="6">06</option>
                              <option value="7">07</option>
                              <option value="8">08</option>
                              <option value="9">09</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                            </select>
                            <select className="month" name="month" disabled>
                              <option value="">05</option>
                              <option value="1">01</option>
                              <option value="2">02</option>
                              <option value="3">03</option>
                              <option value="4">04</option>
                              <option value="5">05</option>
                              <option value="6">06</option>
                              <option value="7">07</option>
                              <option value="8">08</option>
                              <option value="9">09</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                            </select>
                            <select className="year" name="year" disabled="">
                              <option value="">2002</option>
                              <option value="1940">1940</option>
                              <option value="1941">1941</option>
                              <option value="1942">1942</option>
                              <option value="1943">1943</option>
                              <option value="1944">1944</option>
                              <option value="1945">1945</option>
                              <option value="1946">1946</option>
                              <option value="1947">1947</option>
                              <option value="1948">1948</option>
                              <option value="1949">1949</option>
                              <option value="1950">1950</option>
                              <option value="1951">1951</option>
                              <option value="1952">1952</option>
                              <option value="1953">1953</option>
                              <option value="1954">1954</option>
                              <option value="1955">1955</option>
                              <option value="1956">1956</option>
                              <option value="1957">1957</option>
                              <option value="1958">1958</option>
                              <option value="1959">1959</option>
                              <option value="1960">1960</option>
                              <option value="1961">1961</option>
                              <option value="1962">1962</option>
                              <option value="1963">1963</option>
                              <option value="1964">1964</option>
                              <option value="1965">1965</option>
                              <option value="1966">1966</option>
                              <option value="1967">1967</option>
                              <option value="1968">1968</option>
                              <option value="1969">1969</option>
                              <option value="1970">1970</option>
                              <option value="1971">1971</option>
                              <option value="1972">1972</option>
                              <option value="1973">1973</option>
                              <option value="1974">1974</option>
                              <option value="1975">1975</option>
                              <option value="1976">1976</option>
                              <option value="1977">1977</option>
                              <option value="1978">1978</option>
                              <option value="1979">1979</option>
                              <option value="1980">1980</option>
                              <option value="1981">1981</option>
                              <option value="1982">1982</option>
                              <option value="1983">1983</option>
                              <option value="1984">1984</option>
                              <option value="1985">1985</option>
                              <option value="1986">1986</option>
                              <option value="1987">1987</option>
                              <option value="1988">1988</option>
                              <option value="1989">1989</option>
                              <option value="1990">1990</option>
                              <option value="1991">1991</option>
                              <option value="1992">1992</option>
                              <option value="1993">1993</option>
                              <option value="1994">1994</option>
                              <option value="1995">1995</option>
                              <option value="1996">1996</option>
                              <option value="1997">1997</option>
                              <option value="1998">1998</option>
                              <option value="1999">1999</option>
                              <option value="2000">2000</option>
                              <option value="2001">2001</option>
                              <option value="2002">2002</option>
                              <option value="2003">2003</option>
                              <option value="2004">2004</option>
                              <option value="2005">2005</option>
                              <option value="2006">2006</option>
                              <option value="2007">2007</option>
                              <option value="2008">2008</option>
                              <option value="2009">2009</option>
                              <option value="2010">2010</option>
                              <option value="2011">2011</option>
                              <option value="2012">2012</option>
                              <option value="2013">2013</option>
                              <option value="2014">2014</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              <option value="2021">2021</option>
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>
                            </select>
                          </div>
                        </div>
                        <Control
                          className="height"
                          id="height"
                          label="Chiều cao"
                          min="150"
                          max="200"
                          type="range"
                        />
                        <Control
                          className="weight"
                          id="weight"
                          label="Cân nặng"
                          min="20"
                          max="150"
                          type="range"
                        />
                        <Button>Cập nhật thông tin</Button>
                      </form>
                    </div>
                  </PersonalInfor>
                </Col>
              </Row>
            </Content>
          </Main>
        </Col>
      </Row>
    </Wrapper>
  );
};
const LoginInfor = styled.div`
  .content {
    p {
      display: flex;
      line-height: 1.5;
      gap: 1rem;
      span {
        font-size: 15px;
      }
      margin-bottom: 10px;
    }
  }
  .password {
    margin-top: 25px;
    button {
      width: 100%;
      height: 48px;
    }
  }
`;

const Content = styled.div``;
const PersonalInfor = styled.div`
  form {
    button {
      width: 100%;
      height: 48px;
    }
  }
  .height {
    .irs-bar {
      height: 2px;
      background: #000;
      border-radius: 15px;
      position: absolute;
      display: block;
      top: 0;
      left: 0 !important;
    }
  }
  .check {
    display: flex;
    gap: 2rem;
    .item {
      display: flex;
      align-items: center;
    }
  }
  .sex {
    > label {
      margin: 0 0 10px;
      color: #000;
      line-height: 19px;
    }
    label {
      display: block;
      font-weight: 400;
      font-size: 15px;
    }
  }
`;

const Title = styled.div`
  border-bottom: 1px solid #cacaca;
  padding-bottom: 25px;
  margin-bottom: 30px;
  font-size: 15px;
  line-height: 18px;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    margin: 0;
  }
  span {
    font-size: 15px;
    line-height: 18px;
    margin-top: 10px;
    display: block;
  }
`;

const Main = styled.div`
  margin-top: 90px;
  padding-bottom: 100px;

  .title {
    display: block;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin: 0 0 25px;
  }
`;
const Wrapper = styled.div`
  max-width: 1260px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;
  > div {
    > div {
      padding: 0 30px;
    }
  }
`;
export default Account;
