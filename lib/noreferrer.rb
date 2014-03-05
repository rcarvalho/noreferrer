module NoReferrerHelper
  def link_no_referrer title, url, options={}
    opts = options.map{|k,v| "#{k}='#{v}'"}.join(' ')
    "<a data-url='#{url}' #{opts}>#{title}</a>".html_safe
  end
end

module Noreferrer
  class Engine < Rails::Engine
    initializer :noreferrer do |config|
      ActionView::RoutingUrlFor.module_eval do
        include NoReferrerHelper
      end    
    end
  end
end