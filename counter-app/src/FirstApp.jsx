import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle, name}) => {
  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Manuel Toledo',
  subTitle: 'No hay subtitulo',
  // title: 'No hay titulo',
}