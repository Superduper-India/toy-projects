# 4장 커넥션 관리

```
4.1 TCP 커넥션
4.2 TCP의 성능에 대한 고려
4.3 HTTP 커넥션 관리
4.4 병렬 커넥션
4.5 지속 커넥션
4.6 파이프라인 커넥션
4.7 커넥션 끊기에 대한 미스터리
4.8 추가 정보
```

## 1. TCP 커넥션

  <details>
  <summary>TCP커넥션은 무엇인가?</summary>
  
  - 클라이언트 컴퓨터(앱)과 서버 컴퓨터(앱)의 **TCP/IP 커넥션**이다.
  - **세계 어디서든** 맺을 수 있다.
  - 커넥션을 맺으면 주고받는 메시지들은 **손상**되거나 **순서**가 바뀌지 않고 **안전**하게 **전달**된다.
    - TCP/IP는 데이터 **스트림**을 **세그먼트**라는 단위로 나누고, **IP패킷**이라는 봉투에 담아 인터넷을 통해 데이터를 전달한다.

  </details>

  <details>
  <summary>도메인주소를 브라우저에 입력하면 일어나는 일에 대해 설명하라</summary>

[참고 - 주소창에 naver.com을 치면 일어나는 일](https://github.com/WooVictory/Ready-For-Tech-Interview/blob/master/Network/%EC%A3%BC%EC%86%8C%EC%B0%BD%EC%97%90%20naver.com%EC%9D%84%20%EC%B9%98%EB%A9%B4%20%EC%9D%BC%EC%96%B4%EB%82%98%EB%8A%94%20%EC%9D%BC.md)

1. 브라우저가 url주소라는 **호스트명**을 추출한다.
2. 브라우저가 DNS를 통해서 이 호스트명에 대한 **ip주소**를 찾는다.
3. 브라우저가 **포트번호**를 얻는다.
4. 브라우저가 ip주소의 포트번호로 **TCP커넥션을 생성**한다.
5. 브라우저가 서버로 http get요청 메시지를 보낸다.
6. 브라우저가 서버로부터 온 http응답 메시지를 읽는다.
7. 브라우저가 **커넥션을 끊는다**.

  </details>

  <details>
  <summary>HTTPS는 무엇인가?</summary>
  
  - https는 http에 보안기능을 더했다.
  - TLS(Transport Layer Security) 혹은 SSL(Secure Socker Layer)이라 불린다.
  - http와 tcp사이에 있는 암호화 계층이다.

  </details>
