

const FunFact = () => {
  return (
    <>
       <section className="text-center mb-5">
            <h1 className="text-3xl font-bold text-yellow-300">FUN FACTS</h1>
          </section>
          <section>
            <div className="flex shadow">
              <div className="stat place-items-center">
                <div className="stat-value">50K+</div>
                <div className="">Lines of Code</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-value text-secondary">12+</div>
                <div className="stat-desc text-secondary">
                  Projects Completed
                </div>
              </div>

              {/* <div className="stat place-items-center">
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div> */}
            </div>
          </section>
    </>
  )
}

export default FunFact
