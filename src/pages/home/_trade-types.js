import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import { Header, Text, Card } from 'components/elements'
import { localize } from 'components/localization'
import { Container, Flex, Show } from 'components/containers'
import MarginLogo from 'images/svg/margin_2.svg'
import OptionsLogo from 'images/svg/options_2.svg'
import MultipliersLogo from 'images/svg/multipliers_2.svg'
import { LinkButton } from 'components/form'
//import device from 'themes/device'

const StyledCard = styled(Card)`
    max-width: 28.2rem;
    margin: 0 2.4rem;
    padding: 6.4rem 2.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;

    &:nth-child(4) {
        margin-right: unset;
    }
    ${Text} {
        font-size: 1.4rem;
    }
    ${Header} {
        text-align: center;
        font-size: 2.4rem;
        margin-bottom: 0.8rem;
        margin-top: 2.4rem;
    }
`
=======
import TradeTypesCard from './_trade-types-card'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import MarginLogo from 'components/svgs/margin'
import OptionsLogo from 'components/svgs/options'
import MultipliersLogo from 'components/svgs/multipliers'
import { LinkButton } from 'components/form'

>>>>>>> 5d4b3f26bdb61f24ed9cadf3bea9d145e514a93f
const TradingButton = styled(LinkButton)`
    height: 4.8rem;
    display: flex;
    align-items: center;
    max-width: 18rem;
    justify-content: center;
`

<<<<<<< HEAD
const TradeTypes = () => {
    return (
        <div>
            <Show.Desktop max_width="851">
                <Container m="0 auto 8rem !important" height="35rem" width="90% !important">
                    <Flex direction="column" max_width="28.2rem">
                        <Header size="3.2rem">{localize('Trade types')}</Header>
                        <Text size="2.4rem" mt="1.6rem" mb="5rem">
                            {localize(
                                'Trade what you like, the way you like it, and on your preferred market.',
                            )}
                        </Text>
                        <TradingButton type="submit" secondary="true" to="/signup/">
                            {localize('Start trading')}
                        </TradingButton>
                    </Flex>
                    <StyledCard>
                        <div>
                            <MarginLogo />
                        </div>
                        <Header>{localize('Margin trading')}</Header>
                        <Text>
                            {localize(
                                'Trade with leverage and low spreads for better returns on successful trades.',
                            )}
                        </Text>
                    </StyledCard>
                    <StyledCard>
                        <div>
                            <OptionsLogo />
                        </div>
                        <Header>{localize('Options')}</Header>
                        <Text>
                            {localize(
                                'Earn fixed payouts by predicting an assets price movement within a fixed time.',
                            )}
                        </Text>
                    </StyledCard>
                    <StyledCard>
                        <div>
                            <MultipliersLogo />
                        </div>
                        <Header>{localize('Multipliers')}</Header>
                        <Text>
                            {localize(
                                'Get the best of both - the upside of margin trading with the simplicity of options.',
                            )}
                        </Text>
                    </StyledCard>
                </Container>
            </Show.Desktop>
            <Show.Mobile min_width="852">
                <Container
                    ai="center"
                    direction="column"
                    m="9rem auto 15rem !important"
                    height="35rem"
                    width="90% !important"
                >
                    <Flex direction="column">
                        <Header align="center" size="3.2rem">
                            {localize('Trade Types')}
                        </Header>
                        <Text align="center" size="2.4rem" mt="1.6rem" mb="5rem">
                            {localize(
                                'Trade what you like, the way you like it, and on your preferred market.',
                            )}
                        </Text>
                    </Flex>
                    <Flex>
                        <StyledCard>
                            <div>
                                <MarginLogo />
                            </div>
                            <Header>{localize('Margin trading')}</Header>
                            <Text>
                                {localize(
                                    'Trade with leverage and low spreads for better returns on successful trades.',
                                )}
                            </Text>
                        </StyledCard>
                        <StyledCard>
                            <div>
                                <OptionsLogo />
                            </div>
                            <Header>{localize('Options')}</Header>
                            <Text>
                                {localize(
                                    'Earn fixed payouts by predicting an assets price movement within a fixed time.',
                                )}
                            </Text>
                        </StyledCard>
                        <StyledCard>
                            <div>
                                <MultipliersLogo />
                            </div>
                            <Header>{localize('Multipliers')}</Header>
                            <Text>
                                {localize(
                                    'Get the best of both - the upside of margin trading with the simplicity of options.',
                                )}
                            </Text>
                        </StyledCard>
                    </Flex>
                    <TradingButton mt="3rem" type="submit" secondary="true" to="/signup/">
                        {localize('Start trading')}
                    </TradingButton>
                </Container>
            </Show.Mobile>
=======
const StyledContainer = styled(Container)`
    margin: 0 auto 8rem;
    height: auto;
    width: 90%;
    flex-wrap: nowrap;
`

const TradeTypes = () => {
    return (
        <div>
            <StyledContainer>
                <Flex direction="column" max_width="28.2rem">
                    <Header size="3.2rem">{localize('Trade types')}</Header>
                    <Text size="2.4rem" mt="1.6rem" mb="5rem">
                        {localize(
                            'Trade what you like, the way you like it, and on your preferred market.',
                        )}
                    </Text>
                    <TradingButton type="submit" secondary="true" to="/signup/">
                        {localize('Start trading')}
                    </TradingButton>
                </Flex>
                <Flex>
                    {trade_types.map((trade_type) => (
                        <TradeTypesCard
                            key={trade_type.title}
                            icon={trade_type.icon}
                            title={trade_type.title}
                            description={trade_type.description}
                            link={trade_type.link}
                            linkTitle={trade_type.linkTitle}
                        />
                    ))}
                </Flex>
            </StyledContainer>
>>>>>>> 5d4b3f26bdb61f24ed9cadf3bea9d145e514a93f
        </div>
    )
}

<<<<<<< HEAD
=======
const margin = {
    icon: <MarginLogo dynamic_id="margin-desktop" />,
    title: <Localize translate_text="Margin Trading" />,
    description: (
        <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
    ),
    link: '/trade-types/margin',
    linkTitle: localize('Margin'),
}
const options = {
    icon: <OptionsLogo dynamic_id="options-desktop" />,
    title: <Localize translate_text="Options" />,
    description: (
        <Localize translate_text="Earn fixed payouts by predicting an assets price movement within a fixed time." />
    ),
    link: '/trade-types/options',
    linkTitle: localize('Options'),
}
const multipliers = {
    icon: <MultipliersLogo dynamic_id="multipliers-desktop" />,
    title: <Localize translate_text="Multipliers" />,
    description: (
        <Localize translate_text="Get the best of both - the upside of margin trading with the simplicity of options." />
    ),
    link: '/trade-types/multiplier',
    linkTitle: localize('Multiplier'),
}

const trade_types = [margin, options, multipliers]

>>>>>>> 5d4b3f26bdb61f24ed9cadf3bea9d145e514a93f
export default TradeTypes
