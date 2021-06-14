import React, { useCallback, useRef, useState } from "react";
import { Form, Input, InputGroup, Button, InputGroupAddon } from "reactstrap";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../action";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import { GrTextAlignLeft } from "react-icons/gr";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const InputRef = useRef(null);

  const onChange = useCallback((e) => {
    const city = e.target.value;
    setCity(city);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (city === "") {
        InputRef.current.focus();
      } else {
        InputRef.current.focus();
        dispatch(fetchWeather(city));
        setCity("");
      }
    },
    [dispatch, city]
  );

  return (
    <Form onSubmit={onSubmit} style={{ display: "flex", alignItems: "center" }}>
      <Link to="/" className="btn btn-primary">
        <GrTextAlignLeft fontSize="30px" />
      </Link>
      <InputGroup className="ml-3">
        <Input
          placeholder="날씨를 알고 싶은 도시의 이름을 적어주세요"
          value={city}
          ref={InputRef}
          onChange={onChange}
          bsSize="lg"
        />
        <InputGroupAddon addonType="append">
          <Button color="secondary" outline>
            <ImSearch fontSize="25px" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
