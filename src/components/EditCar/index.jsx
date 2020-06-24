import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import { Context } from '../../context';
import FormInput from '../FormInput/index';
import { api } from '../../services/api';
import Button from '../Button/index';
import { Link } from 'react-router-dom';

const MainContent = (props) => {
  const {
    brands,
    carDetails,
    setCarDetails,
    handleSave,
    handleRemove,
    handleCancel,
  } = useContext(Context);
  const { id } = useParams();
  const [carId, setCarId] = useState(id);

  useEffect(() => {
    setCarId(id);
    console.log('inside useeffect', carId);
    api.get(`cars/${carId}`).then((resp) => {
      const { id, title, model, brand, year, km, price, color } = resp.data;
      setCarDetails({
        id,
        title,
        model,
        brand,
        year,
        km,
        price,
        color,
      });
    });
  }, [carId, setCarDetails, id]);

  return (
    <Container {...props}>
      <Content>
        <Form>
          <FormInput name="title" type="string" value={carDetails.title} />

          <StyledCarDetails>
            <FormInput name="model" type="string" value={carDetails.model} />
            <FormInput name="year" type="number" value={carDetails.year} />
          </StyledCarDetails>

          <StyledCarDetails>
            <FormInput name="color" type="string" value={carDetails.color} />
            <FormInput name="price" type="string" value={carDetails.price} />
          </StyledCarDetails>

          <StyledSelect name="brand">
            {brands.map((brand) => (
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </StyledSelect>

          <StyledCarDetail>
            <FormInput name="km" type="number" value={carDetails.km} />
          </StyledCarDetail>

          <StyledButtons>
            <SecondaryButtons>
              <Link to="/">
                <Button onClick={() => handleRemove(carDetails.id)}>
                  Remover
                </Button>
              </Link>

              <Link to="/">
                <Button onClick={handleCancel}>Cancelar</Button>
              </Link>
            </SecondaryButtons>
            <Link to="/">
              <Button onClick={() => handleSave(carId)}>Salvar</Button>
            </Link>
          </StyledButtons>
        </Form>
      </Content>
    </Container>
  );
};

export default MainContent;
