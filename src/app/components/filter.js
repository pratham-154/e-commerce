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
  return (
    <div className="filter_parent">
      <div className="filter_head">
        <h3>Filter</h3>
        <div className="arrow_icon">
          <KeyboardBackspaceIcon
            onClick={() => props.setShowComponent(false)}
          />
        </div>
      </div>
      <div className="availability_parent">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            AVAILABILITY
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="in_stock"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="in_stock"
              control={<Radio />}
              label="In Stock"
            />
            <FormControlLabel
              value="out_of_stock"
              control={<Radio />}
              label="Out of Stock"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="product_category_parent">
        <FormGroup>
          <FormLabel id="demo-radio-buttons-group-label">
            PRODUCT CATEGORY
          </FormLabel>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Hair Product"
          />
          <FormControlLabel control={<Checkbox />} label="Loreum Epsum" />
          <FormControlLabel control={<Checkbox />} label="Loreum Epsum" />
          <FormControlLabel control={<Checkbox />} label="Loreum Epsum" />
          <FormControlLabel control={<Checkbox />} label="Loreum Epsum" />
          <FormControlLabel control={<Checkbox />} label="Loreum Epsum" />
          <FormControlLabel control={<Checkbox />} label="Loreum Epsum" />
          <FormControlLabel control={<Checkbox />} label="Loreum Epsum" />
        </FormGroup>
      </div>
      <div className="price_range_parent">
        <FormGroup>
          <FormLabel id="demo-radio-buttons-group-label">PRICE RANGE</FormLabel>
          <div className="on_sale_field">
            <InputLabel>ON SALE</InputLabel>
            <FormControlLabel control={<Switch />} />
          </div>
        </FormGroup>
      </div>
    </div>
  );
};

export default Filter;
