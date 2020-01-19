import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import BottomScrollListener from "react-bottom-scroll-listener"

import {
  getPortfolios,
  getMorePortfolios,
  resetPortfolios
} from "../../../actions/portfolioActions"
import { CardPortfolio, Spinner, ScrollTo } from "../../../components"
import CardPortfolioWrapper from "../../../components/Card/Portfolio/Wrapper"

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1
    }
  }

  componentDidMount() {
    this.props.getMorePortfolios({
      page: this.state.page
    })
  }

  handleGetMorePortfolios = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.props.getMorePortfolios({
          page: this.state.page
        })
      }
    )
  }

  renderCardPortfolio() {
    const { portfolio } = this.props

    const portfolios = portfolio.results.map(portfolio => {
      return (
        <CardPortfolio
          key={portfolio._id}
          id={portfolio._id}
          title={portfolio.title}
          description={portfolio.description}
          position={portfolio.position}
          task={portfolio.task}
          technology={portfolio.technology.split(",")}
          gallery={portfolio.gallery}
        />
      )
    })

    return <CardPortfolioWrapper>{portfolios}</CardPortfolioWrapper>
  }

  componentWillUnmount() {
    this.props.resetPortfolios()
  }

  render() {
    const { portfolio } = this.props

    return (
      <BottomScrollListener
        onBottom={this.handleGetMorePortfolios}
        offset="500"
      >
        <ScrollTo>
          {portfolio.results.length ? (
            this.renderCardPortfolio()
          ) : (
            <Spinner size="md" />
          )}
        </ScrollTo>
      </BottomScrollListener>
    )
  }
}

Index.propTypes = {
  portfolio: PropTypes.object.isRequired,
  getPortfolios: PropTypes.func.isRequired,
  getMorePortfolios: PropTypes.func.isRequired,
  resetPortfolios: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
})

const mapDispatchToProps = {
  getPortfolios,
  getMorePortfolios,
  resetPortfolios
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
