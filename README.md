# (진행중)

## 프로젝트 목적
브라우저 환경, 브라우저에 로그인 하는 계정마다 달라지는 북마크들을 한 곳에서 통일되게 관리하고 싶었음.


## 프로젝트 구조
각각의 브라우저 익스텐션, 웹, 모바일 등 다양한 환경에서 공통으로 사용되는 패키지 관리를 위해 모노레포로 구현.
```bash
dong-marks
└── apps                 
    ├── extension       # 브라우저 익스텐션 프로젝트
    ├── web             # 웹 앱 프로젝트
└── packages            
    ├── common-helpers          # 공통 helper 함수
    ├── common-types            # 공통 type 정의
    ├── eslint-config-custom    # 공통 eslint 환경 설정
    ├── react-hooks             # 공통 react-hooks
    ├── tsconfig                # 공통 tsconfig
    ├── ui                      # 공통 컴포넌트
```
