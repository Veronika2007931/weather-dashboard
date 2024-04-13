import styled from "styled-components";

export const HeadSection = styled.div`
    padding: 15px 0;
    width: 1200px;
    height: 70px;
    display: flex;
    margin: auto;
`
export const Logo = styled.a`
    width: 82px;
    height: 56px;
    background-image: url("https://s3-alpha-sig.figma.com/img/d743/1622/b25f81d265cb2dee277c7493fe8a44fb?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OtTcxYl7OOnTkCEOSshfWdcPw78r1TSA2PR60CowjoEBElA3xPbA8KTebeII7EyqkvjXsogop-iRlDtxtxfkxhUY09xHxF515DRDHL2NxfPKUhbSKRf7mbrJvI-pLO4lnb4iyhnZFDTq-8rE32IUgr7XxNU6wITKjlOau0twhVaBpxX~mdb0E1lSPS5XGCLA0cABKnNamvaE07x016OxaZtI10Gte86SjwoElEXNB2PNyoLJMppqoHXDv1oMU4DgkK99ctppdeSMYaMKcFvlG339i17AZFFi3ccbiw0em2YfDXMybcwIzxJZBqCZ6fUDPcT1QTnI-viR4ZThBGDPTw__");
    background-size: cover;
`

export const HeadMenu = styled.ul`
    margin: auto 111px;
    list-style:none;
    display: flex;
    & li:not(:first-child){
        margin-left: 45px;
    }
`
export const SingInMenu = styled.div`
    display: flex;
    margin-left:auto;
    & div{
        margin: auto;
        margin-left: 25px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-repeat:no-repeat;
        background-size:cover;
        background-image: url("https://s3-alpha-sig.figma.com/img/9485/b24e/7b93f6f63c57e7e568f98c79671af7f5?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EE~sskGRCeGIitC6~lvPMLyJmLOpRxU4YebEySKRD7LeIcM3IdN~EpgsnjqX0bt9xu3YpRizecmZCrZyNn4GDtgqF5xaQlbJCn-iVjy2GmNROcd6y8NZCxNjipyYRzvB1DfQvXQ6Nz1PFYnPRmQ0qRkB6izg~iX8pGjBHb5V1-kzhJSgTtXfQAxD0Pr5kBeZPMoexodATYF8-OGH5vcCCzF34nWMbsdYDo8NEG5lzDbuHrAqAXr8OeoTxirdhNMAkEtef0LklyJB~PRz9b1mSoKzIsVpcDE0q4s0VBhqk4Xo4jOPorMmse5HXv7dSZOaI~s4h8Gdsx6fhx9tyOm0Ew__");
        
    }
    & button{
        margin: auto 0;
        height: min-content;
        background-color: #FFB36C;
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
    }
`