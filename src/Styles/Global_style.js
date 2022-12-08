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
  background-color: rgb(79, 79, 237);
  margin: 5px;
}

main{
  width: 100%;
  margin: auto;

h4{
  margin-top: 1em;
  font-weight: 400;
  text-align: center;
}

}

`

export default Globals;