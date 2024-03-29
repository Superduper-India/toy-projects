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
  
  - 클라이언트 컴퓨터(앱)과 서버 컴퓨터(앱)의 **세계 어디서든** 맺을 수 있는 **TCP/IP 커넥션**이다.
  - 커넥션을 맺으면 주고받는 메시지들은 **손상**되거나 **순서**가 바뀌지 않고 **안전**하게 **전달**된다.
    - TCP/IP는 **데이터 스트림**을 **세그먼트**라는 단위로 나누고, **IP패킷**이라는 봉투에 담아 인터넷을 통해 데이터를 전달한다.
  - TCP는 **포트 번호**를 통해서 **여러개의 커넥션을 유지**한다.
    - **IP주소**는 해당 **컴퓨터**에 연결되고, **포트 번호**는 해당 **앱**으로 연결된다.
    - 발신지 ip주소, 발신지 포트, 수신지 ip주소, 수신지 포트로 식별하기 때문에 **이 모두가 같을 수 없다**.

  </details>

  <details>
  <summary>웹브라우저가 http를 이용하여 죠의 컴퓨터 가게에서 power-tools.html을 내려받는 방법을 설명하라</summary>

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

  <details>

  <summary>HTTP트랜잭션을 지연시키는 원인에 대해 말하라</summary>
  대부분의 HTTP지연은 TCP네트워크 지연때문에 발생한다.
  
  - 해당 호스트에 최근 방문한 적이 없으면, DNS 인프라로 호스트명을 IP주소로 변환하는데 수십 초의 시간이 걸린다.
  - 클라이언트가 서버에 TCP커넥션 요청을하고 응답을 기다리는데 1-2초가 소요되며, 수백 개의 HTTP트랜잭션이 만들어지면 소요시간이 커진다.
  - 클라이언트의 HTTP요청을 서버에서 처리하는데 시간이 소요된다.
  - 서버가 HTTP응답을 보내는 것도 시간이 소요된다.

  </details>
