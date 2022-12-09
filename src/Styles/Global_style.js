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
/* 
.input-cont{
  height: 2em;
  margin: 1em 0;
 
} */
button{
  padding: 8px 15px;
  border: none;
  color: #fff;
  background-color: red;
  border-radius: 5px;
  margin-right: 2em;
}
`

export default Globals;