import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #FFB36C;
    width: 100%;
    height: 179px;

    .container {
        display: flex;
        gap: 6%;
        padding: 0.5% 0 0 6%;

        .logo {
            padding: 1% 0 0 1%;
        }

        .content {
            display: flex;
            gap: 8%;
            width: 40%;

            .list {
                width: 23%;

                ul {
                    padding: 0;
                    list-style: none;

                    h4 {
                        font-size: 16px;
                        font-weight: 500;
                    }

                    li {
                        font-size: 12px;
                    }
                }
            }

            .contact {
                width: 35%;

                .subtitle {
                    h4 {
                        font-size: 16px;
                        font-weight: 500;
                    }
                }

                .messenger {
                    display: flex;
                    gap: 8%;

                    button {
                        padding: 0;
                        outline: none;
                        border: none;
                        background-color: transparent;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 834px) {
        width: 100%;
        height: 138px;

        .container {
            gap: 12%;
            padding: 1.5% 0 0 10%;

            .logo {
                padding: 2% 0 0 0;

                img {
                    width: 58px;
                }
            }

            .content {
                width: 50%;
                gap: 17%;

                .list {
                    width: 27%;

                    ul {
                        h4 {
                            font-size: 14px;
                        }

                        li {
                            font-size: 10px;
                        }
                    }
                }

                .contact {
                    width: 50%;

                    .subtitle {
                        h4 {
                            font-size: 14px;
                        }
                    }

                    .messenger {
                        gap: 13%;

                        img {
                            width: 35px;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 393px) {
        width: 100%;
        height: 212px;

        .container {
            gap: 8%;
            padding: 1% 0 0 0;

            .logo {
                padding: 0% 0 0 0;
                width: 22%;

                img {
                    padding: 15% 0 0 45%;
                    width: 50px;
                }
            }

            .content {
                width: 40%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .list {
                    width: 40%;

                    ul {
                        h4 {
                            font-size: 12px;
                        }

                        li {
                            font-size: 8px;
                        }
                    }
                }

                .contact {
                    width: 100%;

                    .subtitle {
                        h4 {
                            text-align: center;
                            font-size: 12px;
                        }
                    }

                    .messenger {
                        gap: 16%;

                        img {
                            width: 35px;
                        }
                    }
                }
            }
        }
    }
`;
export default FooterContainer;