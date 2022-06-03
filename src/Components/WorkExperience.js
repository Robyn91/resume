function WorkExperience(props) {
    const list = props.workExp.map((work) =>
        <div>
            <h4 className={'pt-4'}>
                {work.position}
            </h4>
            <div>
                {work.timeline}
            </div>
            <div>
                {work.where}
            </div>
            <div>
                {work.skills}
            </div>
        </div>
    )
    return (
        <div className={''}>
                {list}
        </div>
    )
}

export default WorkExperience