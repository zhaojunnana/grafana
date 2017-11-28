import React from 'react';
import classNames from 'classnames';

export interface IProps {
  sections: any;
}

export class SearchResultList extends React.Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.sections.map(section => {
      return <SearchResultSection section={section} />;
    });
  }
}

export interface SectionProps {
  section: any;
}

export class SearchResultSection extends React.Component<SectionProps, any> {
  constructor(props) {
    super(props);

    this.toggleSection = this.toggleSection.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.state = {
      expanded: this.props.section.expanded
    };
  }

  toggleSection(section) {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  renderItem(item) {
    return (
      <a className="search-item" href={item.url} key={item.id}>
        <span className="search-item__icon">
          <i className="fa fa-th-large" />
        </span>
        <span className="search-item__body">
          <div className="search-item__body-title">{item.title}</div>
        </span>
      </a>
    );
  }

  render() {
    let collapseClassNames = classNames({
      fa: true,
      'fa-plus': !this.state.expanded,
      'fa-minus': this.state.expanded,
      'search-section__header__toggle': true,
    });

    return (
      <div className="search-section" key={this.props.section.id}>
        <div className="search-section__header">
          <i className={classNames('search-section__header__icon', this.props.section.icon)} />
          <span className="search-section__header__text">{this.props.section.title}</span>
          <i className={collapseClassNames} onClick={this.toggleSection} />
        </div>
        {this.state.expanded && (
          <div className="search-section__items">{this.props.section.items.map(this.renderItem)}</div>
        )}
      </div>
    );
  }
}
