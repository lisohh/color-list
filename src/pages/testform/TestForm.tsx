import * as React from "react";
import Pallete from "./Pallete";
import "./TestForm.css";
import QuizList from "~/pages/qlists/quizList.json";
import { saveColors } from "~/api"; // absolute 절대
// import { saveColors } from "../../api"; // relative 상대

// 8월 16일 2번
// https://www.radix-ui.com/docs/primitives/components/tabs#examples
// bun add @radix-ui/react-tabs
// 탭의 색깔에 명도/채도가 반영되면 좋겠다

function TestForm() {
  // const [colorSelection, setColorSelection] =
  // React.useState("주조색:\n보조색:\n강조색:");

  return (
    <article className="test-form">
      {/* 0825 합동코칭 - 연결하기위해 form으로 감싸고 submit  */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target as HTMLFormElement);

          const colors = formData.get("colors");
          const rawData = {
            box: JSON.parse(colors as string),
            ju: formData.getAll("ju"),
            bo: formData.getAll("bo"),
            gang: formData.getAll("gang"),
            answer: formData.getAll("answer"),
          };

          if (colors !== null) {
            // 전처리, preprocess
            const data = [
              {
                box: rawData.box.slice(0, 10),
                jubogang: {
                  ju: rawData.ju[0],
                  bo: rawData.bo[0],
                  gang: rawData.gang[0],
                },
                answer: rawData.answer[0],
              },
              {
                box: rawData.box.slice(10, 20),
                jubogang: {
                  ju: rawData.ju[1],
                  bo: rawData.bo[1],
                  gang: rawData.gang[1],
                },
                answer: rawData.answer[1],
              },
            ];
            alert(JSON.stringify(data));
            // saveColors(data as MyColors[]);
          }
        }}
      >
        <div className="quiz-paragraph">
          <a className="category" href="">
            {/* {QuizList.quiz[0].class} */}
            "2022년도 1회차 기출"
          </a>
          <h1 className="text-2xl mb-2">
            Q.
            {
              /* {QuizList[0].quizContent} */ "따뜻하고 풍요로운 이미지와 차갑고 쓸쓸한 이미지 두가지를 연출해 보세요."
            }
          </h1>
          <h2 id="condition" className="text-lg">
            (3색 이상, 10칸 이상 배색)
          </h2>
        </div>

        <Pallete />
        {/* 8번 input은 text 줄바꿈이 안되므로 textarea를 사용해 서술칸을 만든다. */}
        {/* <input type="text" /> */}
        <p id="allColor">주보강 기입</p>
        <label className="color-label" htmlFor="main-color">
          주조색
        </label>
        <input
          id="color-selection"
          placeholder="주조색:"
          type="text"
          name="ju"
        />
        <label className="color-label" htmlFor="sub-color">
          보조색
        </label>
        <input
          id="color-selection"
          placeholder="보조색:"
          type="text"
          name="bo"
        />
        <label className="color-label" htmlFor="point-color">
          강조색
        </label>
        <input
          id="color-selection"
          placeholder="강조색:"
          type="text"
          name="gang"
        />
        <label className="color-label" htmlFor="explanation" id="explanation">
          배색 설명
        </label>
        <textarea
          id="explanation"
          name="answer"
          placeholder={"컨셉:\n주조색:\n보조색:\n강조색:\n배색 기법:"}
        />
        <p id="allColor">주보강 기입</p>
        <label className="color-label" htmlFor="main-color">
          주조색
        </label>
        <input
          id="color-selection"
          type="text"
          name="ju"
          placeholder="주조색:"
        />
        <label className="color-label" htmlFor="sub-color">
          보조색
        </label>
        <input
          id="color-selection"
          type="text"
          name="bo"
          placeholder="보조색:"
        />
        <label className="color-label" htmlFor="point-color">
          강조색
        </label>
        <input
          id="color-selection"
          type="text"
          name="gang"
          placeholder="강조색:"
        />
        <label className="color-label" htmlFor="explanation" id="explanation">
          배색 설명
        </label>
        <textarea
          id="explanation"
          name="answer"
          placeholder={"컨셉:\n주조색:\n보조색:\n강조색:\n배색 기법:"}
        />
        <button id="save-button" type="submit" className="bg-yellow-300">
          저장하기
        </button>
      </form>
    </article>
  );
}

export default TestForm;