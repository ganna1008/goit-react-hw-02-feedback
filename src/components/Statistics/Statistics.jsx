import PropTypes from 'prop-types';
import {
  StatisticsItem,
  StatisticsSpan,
  StatisticsWrapper,
} from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsWrapper>
        <StatisticsItem>
          Good: <StatisticsSpan>{good}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          Neutral: <StatisticsSpan>{neutral}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          Bad: <StatisticsSpan>{bad}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          Total: <StatisticsSpan>{total}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          Positive feedback:{' '}
          <StatisticsSpan>{positivePercentage}%</StatisticsSpan>
        </StatisticsItem>
      </StatisticsWrapper>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
