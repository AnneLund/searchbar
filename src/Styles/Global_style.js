import {createGlobalStyle} from 'styled-components'


const Globals = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: 100;
}

.search{
 text-align: center;
}

.input-cont{
  width: 50%;
  height: 2em;
  margin: 1em 0;
 
}
button{
  padding: 8px 15px;
  border: none;
  color: #fff;
  background-color: red;
  border-radius: 5px;
  margin: 5px;
}


`

export default Globals;