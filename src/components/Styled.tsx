import styled from 'styled-components'
 export const StyledWrapper = styled.div`
  ul {
    list-style: disc;
  }

   h1{

    font-size: 32px !important;
    font-weight:700
    color:var(--homeblack) !important /* 36px */
   
  }
h2{
  font-size: 26px  !important; /*
    font-weight:700!important

}
  h3 {

    font-size: 22 !important; /* 24px */
    font-weight: 500; !important /* Semi-Bold */
  }

  h4 {
    font-size: 18;    !important /* 20px */
    font-weight: 500; !important /* Semi-Bold */
  }

  h5 {

    font-size: 5rem;  !important /* 16px */
    font-weight: 500; !important /* Medium */
  }

  h6 {

    font-size: 0.875rem; /* 14px */
    font-weight: 400; /* Medium */
  }
 p {
  font-size: 17px; /* 16px */
  font-weight: 400; /* Regular */
  color: #535353; /* Replace with your color */
  text-align: justify;
}
  ol, ul {
    padding-left: 1.5rem;
    list-style-type:disc;
    color: #535353;
    font-size:17px!important;
  }
    table{
    border:1px solid black;
    margin-top:26px ;
    margin-bottom:26px
    color: #535353;
    width:100% ;
    }
    td{
    padding-x:10px;
    color: #535353;
    border:1px solid black;}
    a{
    color:#EF1649;
    font-weight:500;}
`
