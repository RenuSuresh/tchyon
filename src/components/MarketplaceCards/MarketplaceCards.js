import React, { useEffect, useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ShareIcon from "@material-ui/icons/Share";
import { Card, CardContent, Typography, Paper } from "@material-ui/core";
import { useStyles } from "./marketplaceCardsStyles";
import "./MarketplaceCards.css";

export default function MarketplaceCards() {
  const [cardsInfo, setCardsInfo] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    fetch("./marketplace.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCardsInfo(res.marketplace);
      });
  }, []);
  return (
    <>
      <div className="marketplacecards">
        {cardsInfo.length > 0 &&
          cardsInfo.map((card) => (
            <Card className={classes.root}>
              <CardContent>
                <Paper className={classes.paperContent}>
                  <div className="paper-row">
                    <div className="marketplacecard-logoStar">
                      <img
                        src={card.logo}
                        alt="Wint"
                        className="marketplacecard-logo"
                      />
                      <Paper className={classes.starPaper}>
                        <StarIcon className={classes.star} />
                        <Typography
                          variant="h6"
                          component="h6"
                          className={classes.rating}
                        >
                          {card.star}
                        </Typography>
                      </Paper>
                    </div>
                    <div className="marketplacecard-icons">
                      <div className="marketplace-upvote">
                        <ArrowDropUpIcon className={classes.upvoteIcon} />
                        <Typography component="span" className={classes.upvote}>
                          {card.upvote} upvoted
                        </Typography>
                      </div>
                      <ShareIcon />
                    </div>
                  </div>
                  <div className="paper-row">
                    {card.companyInfo.map((info) => (
                      <div className="paper-col">
                        <Typography component="p" className={classes.smallTypo}>
                          {info.key}
                        </Typography>
                        <Typography
                          component="h6"
                          className={classes.smallTypoValue}
                        >
                          {info.value}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </Paper>
                <div>
                  <Typography
                    component="p"
                    variant="p"
                    className={classes.name}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    component="p"
                    variant="p"
                    className={classes.details}
                  >
                    {card.details}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
}
