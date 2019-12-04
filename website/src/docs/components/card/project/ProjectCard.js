import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useText03CardContentStyles } from '@mui-treasury/styles/cardContent/text03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    borderRadius: 20,
  },
  content: {
    padding: 24,
  },
}));

const ProjectCard = () => {
  const styles = useText03CardContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <BrandCardHeader
        image={
          'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'
        }
        extra={'7 minutes'}
      />
      <CardContent className={cardStyles.content}>
        <TextInfoCardContent
          classes={styles}
          overline={'FACEBOOK INC.'}
          heading={'React'}
          body={
            'A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.'
          }
        />
      </CardContent>
    </Card>
  );
};

// hide-start
ProjectCard.metadata = {
  title: 'Project',
  path: 'card/project',
  files: [
    { pkg: 'mui-styles', path: 'shadow/lightTop/lightTopShadow.styles.js' },
    { pkg: 'mui-components', path: 'cardHeader/brand/BrandCardHeader.js' },
    { pkg: 'mui-styles', path: 'cardHeader/brand/brandCardHeader.styles.js' },
    {
      pkg: 'mui-components',
      path: 'cardContent/textInfo/TextInfoCardContent.js',
    },
    {
      pkg: 'mui-styles',
      path: 'cardContent/text03/textCardContent03.styles.js',
    },
  ],
};
// hide-end

export default ProjectCard;
