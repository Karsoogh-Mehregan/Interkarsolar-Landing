import styled from "styled-components";


export const Container = styled.div`
  background-color: #650088;
  min-height: 100vh;
  padding-bottom: 5%;
  padding-top: 3%;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding-bottom: 25%;
    padding-top: 10%;
  }
`;

export const Header = styled.div`
  background-image: url(${process.env.PUBLIC_URL + '/announcement.jpg'});
  background-repeat: no-repeat;
  background-size: contain;
  height: 40vw;
  margin: 0 0 2vh 15%;
  max-height: 40vh;
`;

export const TableContainer = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RowContainer = styled.div`
  color: white;
  display: grid;
  @media screen and (min-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TeamCard = styled.div`
  background-color: white;
  border-radius: 15px;
  border-radius: 15px;
  border: 1px solid #650485;
  box-shadow: 0px 10px 10px -2px rgb(50 1 66 / 50%);
  color: black;
  margin: 1vh 1vw 1vh 2vw;
  overflow: scroll;
  padding: 20px;
  text-align: center;
  width: 30vw;

  //makes scrollbar hidden
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media screen and (max-width: 1050px) {
    width: 70vw;
    margin-top: 1vh;
    margin-bottom: 1vh;
    padding-left: 10px;
  }
`;

export const TeamName = styled.p`
  animation-duration: 2.5s;
  animation-name: slidein;
  color: #45015c;
  font-size: 1.5vw;
  font-weight: bold;
  margin: 0;
  text-align: right;
  white-space: nowrap;
  width: 100%;
@keyframes slidein {
  from {
    margin-right: 100%;
    width: 300%;
  }

  to {
    margin-right: 0%;
    width: 100%;
  }
}
  @media screen and (max-width: 1200px) {
    font-size: 15px;
  }
`;

export const TeamInstitution = styled.p`
  color: #650485;
  font-size: 1.6vw;
  font-weight: 500;
  margin: 0;
  white-space: nowrap;
  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;