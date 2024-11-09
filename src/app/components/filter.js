"use client";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material";
import "../../../public/sass/pages/filter.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Filter = (props) => {
  const { filterData, setFilterData, categories } = props;

  const handleAvailableFilter = async (e) => {
    let availableVal = e.target.value;
    setFilterData((prevState) => ({ ...prevState, stockSelect: availableVal }));
  };

  const handleCategorySelect = async (e) => {
    let categoryId = e.target.value;
    let isChecked = e.target.checked;
    setFilterData((prevState) => ({
      ...prevState,
      selectedCategories: isChecked
        ? [...prevState.selectedCategories, categoryId]
        : [
            ...prevState.selectedCategories.filter(
              (item) => item !== categoryId
            ),
          ],
    }));
  };

  const handlePriceRange = async (e) => {
    setFilterData((prevState) => ({
      ...prevState,
      onSale: e.target.checked,
    }));
    
  };

  return (
    <div className="filter_parent">
      <div className="filter_head">
        <h3>Filter</h3>
        <div
          className="arrow_icon"
          style={{ cursor: "pointer" }}
          onClick={() => props.setShowComponent(false)}
        >
          <KeyboardBackspaceIcon />
        </div>
      </div>
      <div className="availability_parent">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            AVAILABILITY
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={filterData.stockSelect}
            name="radio-buttons-group"
            onChange={handleAvailableFilter}
          >
            {["In Stock", "Out Stock"].map((item) => (
              <FormControlLabel
                value={item}
                control={<Radio />}
                label={item}
                key={item}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
      <div className="product_category_parent">
        <FormGroup>
          <FormLabel id="demo-radio-buttons-group-label">
            PRODUCT CATEGORY
          </FormLabel>
          {categories &&
            categories.map((item) => (
              <FormControlLabel
                key={item._id}
                control={
                  <Checkbox
                    onChange={handleCategorySelect}
                    checked={
                      filterData.selectedCategories &&
                      filterData.selectedCategories.includes(item._id)
                    }
                    value={item._id}
                  />
                }
                label={item.title}
              />
            ))}
        </FormGroup>
      </div>
      <div className="price_range_parent">
        <FormGroup>
          <FormLabel id="demo-radio-buttons-group-label">PRICE RANGE</FormLabel>
          <div className="on_sale_field">
            <InputLabel>ON SALE</InputLabel>
            <FormControlLabel
              control={
                <Switch
                  checked={filterData.onSale}
                  onChange={handlePriceRange}
                />
              }
            />
          </div>
        </FormGroup>
      </div>
    </div>
  );
};

export default Filter;
