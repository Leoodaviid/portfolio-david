import styled from "styled-components";

const SectionHabilidadesStyle = styled.section`
  .timeline {
    position: relative;
  }
  .timeline .timelin-title {
    font-size: 20px;
    text-transform: uppercase;
    margin-left: 2.2rem;
  }

  .timeline li {
    padding: 0 1.25rem 1.25rem 1.87rem;
    list-style: none;
    border-left: 3px solid black;
  }

  .timeline li .content-text {
    box-shadow: none;
    border-radius: 0.2rem;
    padding: 20px;
  }
  .timeline li .content-text:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 1.9);
    color: #f50057;
  }

  .timeline li .line-title {
    font-size: 1rem;
    line-height: 0.37rem;
  }

  .timeline li span {
    font-size: 0.75rem;
    padding: 0.56rem 0;
    display: block;
  }

  .timeline li .line-text {
    color: #888;
    line-height: 1.12rem;
  }
  .line-text {
    margin: 0.5rem 0 0.5rem;
  }

  .timeline li:first-child:before {
    border: 0;
    background: none;
    position: relative;
  }

  .timeline li:last-child {
    padding: 0 1.25rem 0 1.87rem;
  }

  .timeline li:before {
    content: "";
    border: solid 2px;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 3rem;
    -moz-border-radius: 3rem;
    -webkit-border-radius: 3rem;
    font-size: 0.5rem;
    margin-left: -2.18rem;
    font-weight: 400;
    background: black;
    display: block;
    position: absolute;
    margin-top: 1.12rem;
    border-color: #f50057 !important;
  }

  .timeline li:first-child i {
    font-size: 1.25rem;
    float: left;
    margin-left: 1.87rem;
    line-height: 3.12rem;
    border-radius: 1.87rem;
    margin: -0.75rem -3.44rem;
    background: #f50057;
    color: #fff;
    width: 3.12rem;
    height: 3.12rem;
    text-align: center;
  }
  @media (min-width: 990px) {
    #resume {
      padding-left: 5rem;
    }
  }
  @media (max-width: 800px) {
    .timeline li span {
      padding: 0rem 0;
    }
    .timeline li .content-text {
      padding: 1rem 0.5rem 0.5rem 0.8rem;
    }
    .timeline li {
      padding: 0 0rem 1.25rem 1rem;
      list-style: none;
      border-left: 3px solid black;
    }
    .timeline li:last-child {
      padding: 0 0rem 1.25rem 1rem;
    }
  }
`;

export { SectionHabilidadesStyle };
