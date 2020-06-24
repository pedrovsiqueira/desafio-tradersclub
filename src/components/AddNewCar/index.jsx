import React, { useContext, useRef } from 'react';
import {
  Container,
  Content,
  Form,
  StyledButtons,
  SecondaryButtons,
  StyledCarDetails,
  StyledCarDetail,
  StyledSelect,
} from './styles';
import FormInput from '../FormInput/index';
import Button from '../Button/index';
import { Link } from 'react-router-dom';
import { Context } from '../../context';

const MainContent = (props) => {
  const selectRef = useRef(null);
  const {
    brands,
    handleCancel,
    handleAddNewCar,
    handleFormInputNewCar,
  } = useContext(Context);
  return (
    <Container {...props}>
      <Content>
        <Form>
          <FormInput
            placeholder="título"
            inputType="newCar"
            name="title"
            type="string"
          />

          <StyledCarDetails>
            <FormInput
              placeholder="modelo"
              inputType="newCar"
              name="model"
              type="string"
            />
            <FormInput
              placeholder="ano"
              inputType="newCar"
              name="year"
              type="number"
            />
          </StyledCarDetails>

          <StyledSelect
            ref={selectRef}
            onChange={() => handleFormInputNewCar(selectRef)}
            name="brand"
          >
            {brands.map((brand) => (
              <option key={brand.id}>{brand.name}</option>
            ))}
          </StyledSelect>

          <StyledCarDetails>
            <FormInput
              placeholder="cor"
              inputType="newCar"
              name="color"
              type="string"
            />
            <FormInput
              placeholder="preço"
              inputType="newCar"
              name="price"
              type="string"
            />
          </StyledCarDetails>

          <StyledCarDetail>
            <FormInput
              placeholder="km"
              inputType="newCar"
              name="km"
              type="number"
            />
          </StyledCarDetail>

          <StyledButtons>
            <SecondaryButtons>
              <Link to="/cars/new">
                <Button>Remover</Button>
              </Link>

              <Link to="/">
                <Button onClick={handleCancel}>Cancelar</Button>
              </Link>
            </SecondaryButtons>

            <Link to="/">
              <Button onClick={handleAddNewCar}>Salvar</Button>
            </Link>
          </StyledButtons>
        </Form>
      </Content>
    </Container>
  );
};

export default MainContent;
