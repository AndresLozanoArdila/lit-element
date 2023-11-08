

import { css } from "lit-element";

export default css`

:host {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-family: Arial, sans-serif;
}
#cajas{
  height: 70px;
  font-size: 40px;
  font-weight: bold;
  background-color: #495170;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: white;
}
#cajasi2{
  height: 70px;
  font-size: 30px;
  font-weight: bold;
  background-color: #5B5E70;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: white;
}
#cajas2{
  width: 200px;
  height: 70px;
  font-size: 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #5B5E70;
  color: white;
}
#cuadro{
  width: 60rem;
  height: 35.5rem;
  border-radius: 1rem;
  border-color: black;
}
.user-called-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background-color: #8691C2;
}

.user-info {
  font-weight: bold;
}

.user-info span {
  font-weight: normal;
}


.container-campaign {
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background-color: #8691C2;
}

.user-campaign {
  font-weight: bold;
}

`;
