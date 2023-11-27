import { RevolvingDot } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <RevolvingDot
          radius="45"
          strokeWidth="5"
          color="yellow"
          secondaryColor='blue'
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
  )
}
