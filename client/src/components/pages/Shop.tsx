import React from "react";
import Grid from "../shop/Grid";
import Filters from "../shop/Filters";
import Spinner from "../utility/Spinner";
import Section from "../blocks/Section";
import H1 from "../elements/H1";
import NavigationButton from "../buttons/NavigationButton";
import { useGetProductsQuery } from "../../api/apiSlice";
import { useGetCategoryQuery } from "../../api/apiSlice";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { category } = useParams();
  const { data, isLoading, error} = category
    ? useGetCategoryQuery(category)
    : useGetProductsQuery({});    
  if (error) {
    return (
      <Section className="flex-col">
        <H1>Sorry, no products found...</H1>
        <NavigationButton text={"GO HOME"} to={'/'}/>
      </Section>
    );
  }
  if (isLoading) {
    return (
      <Section>
        <Spinner />
      </Section>
    );
  }
  return (
    <Section>
      <Filters />
      <Grid data={[...data]} />
    </Section>
  );
};

export default Shop;
