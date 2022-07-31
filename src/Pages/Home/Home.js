import { MenuItem, TextField } from "@mui/material";
import "./Home.css";
import Categories from "../../Data/Categories";

const Home = () => {
  return (
    <div className="content">
      <div className="setting">
        <span style={{ fontSize: 30 }}>Quiz setting</span>

        <div className="settings__select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <img src="./quiz.svg" className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
