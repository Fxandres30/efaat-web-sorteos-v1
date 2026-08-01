import "./StepIndicator.css";

interface Props {
  step: number;
}

export default function StepIndicator({ step }: Props) {

  const steps = [
    "Cantidad",
    "Datos",
    "Pago",
    "Comprobante",
    "Finalizado"
  ];

  return (

    <div className="step-indicator">

      {

        steps.map((title, index) => (

          <div
            key={index}
            className="step-item"
          >

            <div
              className={
                index + 1 <= step
                  ? "step-circle active"
                  : "step-circle"
              }
            >

              {index + 1}

            </div>

            <span>

              {title}

            </span>

            {

              index < steps.length - 1 && (

                <div
                  className={
                    index + 1 < step
                      ? "step-line active"
                      : "step-line"
                  }
                />

              )

            }

          </div>

        ))

      }

    </div>

  );

}