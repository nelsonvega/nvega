import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { Card, CardContent } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: 151,
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
      },
      container: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
      },
      topasad: {
        color: 'blue',
          position: 'absolute',
          top: '10%',
          left: '50%',
        }
  })

const Header=(props)=> {
    const { classes } = props;
    return (  
            <Card>
                <div className={classes.con}>
                    <CardContent className={classes.content}>
                      <div style={{position: 'relative'}} >
                        <CardMedia
                            component="img"
                            className='ImageHover'
                            image={require(`../images/${props.ImageName}`)}
                        />
                        <div style={{position: 'absolute',
                         color: 'white', top: 60, left: '35%',
                          transform: 'translateX(-50%)'}} >
                        
            <div style={{textAlign:'left'}}>
            <p className="date">June 10, 2019</p>
            <p className="short_desc">If you need to say sorry to somone -Watch this</p>
            </div>
        
                          </div>
                      </div>
                    </CardContent>
                </div>                
            </Card>        
    );
}
export default withStyles(styles)(Header);
// vlog.png